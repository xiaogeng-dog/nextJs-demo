import type { BooksData, BookData } from "@/types/home";
import type { IResultData } from "@/types/global";
import { requestSSG } from "..";

export const fetchBooks = (count = 5) =>
  requestSSG.post<IResultData<BooksData>>({
    url: "/books",
    data: {
      page: 1,
      count,
    },
  });

export const fetchBooksDetail = (id: string) =>
  requestSSG.get<IResultData<BookData>>({
    url: "/book/" + id,
  });
