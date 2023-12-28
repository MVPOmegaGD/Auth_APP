import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandle } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        next(error);
    }    
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandle(404, "Không tìm thấy người dùng!"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandle(401, "Mật khẩu không đúng!"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
        // Thêm thời gian hết hạn của cookie === Tài khoản sẽ tự động bị logout thay vì restart brower
        const expiryDate = new Date(Date.now() + 3600000) //Đơn vị: giây = 1 hour. Thêm biến expiryDate vào cookie {expires: expiryDate} 
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}