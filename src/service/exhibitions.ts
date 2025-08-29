import { connectPool } from "./db";
import { Request } from "express";

export async function exhibitions(req: Request, res: any) {
    try {
        const { from, to } = req.query;

        // 기본 SELECT 쿼리
        let sql = "SELECT * FROM exhibitions";
        const params: any[] = [];

        // 날짜 필터링이 들어왓을경우
        if (from && to) {
            sql += " WHERE start_date >= ? AND end_date <= ?";
            params.push(from, to);
        }

        sql += " ORDER BY start_date DESC";

        const [result] = await connectPool.query(sql, params);

        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error: any) {
        console.error("전시회 목록 조회 실패:", error.message);
        res.status(500).json({
            success: false,
            message: "서버 오류로 전시회를 불러올 수 없습니다.",
        });
    }
}
