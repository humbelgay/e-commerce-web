import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Coupon code is required'],
        unique: true,
        trim: true
    },
    discountPercentage: {
        type: Number,
        required: [true, 'Discount percentage is required'],
        min: [0, 'Discount percentage cannot be negative'],
        max: [100, 'Discount percentage cannot exceed 100']
    },
    expiryDate: {
        type: Date,
        required: [true, 'Expiry date is required']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'User ID is required'],
        unique: true // Ensure each user can have only one coupon
    }
}, { timestamps: true });

const Coupon = mongoose.model('coupon', couponSchema);
export default Coupon;