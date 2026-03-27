import { Request, Response } from "express";
import { postService } from "../services/post.service";
export const postController = {
  index: async (req: Request, res: Response) => {
    const posts = await postService.findAll(
      req.query as {
        search: string;
      },
    );
    res.json({
      data: posts,
    });
  },
  find: async (req: Request, res: Response) => {
    const post = await postService.find(+req.params.id!);
    res.json({
      data: post,
    });
  },
  create: async (req: Request, res: Response) => {
    const post = await postService.create(req.body);
    res.json({
      data: post,
    });
  },
};
