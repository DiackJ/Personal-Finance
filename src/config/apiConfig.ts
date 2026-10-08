type APIConfig = {
    db_url: string;
    jwt_secret: string;
}

export const config: APIConfig = {
    db_url: process.env.DB_URL!,
    jwt_secret: process.env.JWT_SECRET!
}