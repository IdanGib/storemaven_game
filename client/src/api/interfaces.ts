export interface IncementResponse {}
export interface ScoreResponse {
  result: { id: string, score: number }
}

export interface IncementRequest {}
export interface ScoreRequest {
  id: string;
}