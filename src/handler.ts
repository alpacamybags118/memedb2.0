import { Handler, Context, Callback } from 'aws-lambda';

interface Response {
  statusCode: number;
  body: string;
}

const createaccount: Handler = (event: any, context: Context, callback: Callback) => {
  const response: Response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "rawr XD"
    })
  };

  callback(undefined,response);
}

export {createaccount}
