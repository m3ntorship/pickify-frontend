declare namespace IFeedback {
  export interface IFeedbackResErrorData {
    response?: { data: { message: string; status_code: number } };
  }
}

export { IFeedback };
