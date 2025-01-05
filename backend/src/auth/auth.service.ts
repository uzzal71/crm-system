import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { UpdateDto } from './dto/update.dto';
import { RefreshToken } from './schemas/refresh-token.schema';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<User>,
    @InjectModel(RefreshToken.name)
    private RefreshTokenModel: Model<RefreshToken>,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    const { name, email, role, password } = signupDto;

    // Check if email is in use
    const emailInUse = await this.UserModel.findOne({ email });
    if (emailInUse) {
      throw new BadRequestException('email already in use');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await this.UserModel.create({
        name,
        email,
        role,
        password: hashedPassword,
      });

      return newUser;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async login(credentials: LoginDto) {
    const { email, password } = credentials;
    // Find if user exists by email
    const user = await this.UserModel.findOne({ email });
    if (!user) throw new UnauthorizedException('wrong credentials');

    // Compare entered password with existing password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new UnauthorizedException('wrong credentials');

    // Generate JWT token
    const { accessToken, refreshToken } = await this.generateUserTokens(
      user._id.toString(),
    );

    return {
      user: { name: user.name, email: user.email, role: user.role },
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(refreshToken: string) {
    const token = await this.RefreshTokenModel.findOneAndDelete({
      token: refreshToken,
      expiryDate: { $gte: new Date() },
    });

    if (!token) {
      throw new UnauthorizedException('refresh token is invalid');
    }

    return this.generateUserTokens(token.userId);
  }

  async findAll() {
    return `This action returns all auth`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async update(id: number, updateDto: UpdateDto) {
    console.log(updateDto);
    return `This action updates a #${id} auth`;
  }

  async remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async generateUserTokens(userId: string) {
    const accessToken = this.jwtService.sign({ userId });
    const refreshToken = uuidv4();

    await this.storeRefreshToken(refreshToken, userId);
    return {
      accessToken,
      refreshToken,
    };
  }

  async storeRefreshToken(token: string, userId: string) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 3);
    await this.RefreshTokenModel.create({ token, userId, expiryDate });
  }
}
