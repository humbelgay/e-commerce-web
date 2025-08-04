import Redis from "ioredis"
import dotenv from "dotenv";

dotenv.config();
export const redis = new Redis(process.env.UPSTASH_REDIS_URL || "redis://localhost:6379" );
// await redis.set('foo', 'bar');