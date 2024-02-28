import { Topic } from "@/Services/const/enum";

export const mapSlugToTopic: Record<string, Topic> = {
  "xa-hoi": Topic.SOCIETY,
  "the-thao": Topic.SPORT,
  "giai-tri": Topic.ENTERTAINMENT,
  "giao-duc": Topic.EDUCATION,
  "khoa-hoc": Topic.SCIENCE,
  "cong-nghe": Topic.TECHNOLOGY,
  "kinh-te": Topic.ECONOMY,
  "chinh-tri": Topic.POLITICS,
  "the-gioi": Topic.WORLD,
  "phap-luat": Topic.LAW,
  "suc-khoe": Topic.HEALTH,
  "van-hoa": Topic.CULTURE,
  "doi-song": Topic.LIFE,
  "du-lich": Topic.TRAVEL,
  "thoi-trang": Topic.FASHION,
  "am-thuc": Topic.FOOD,
  xe: Topic.CAR,
  phim: Topic.MOVIE,
  nhac: Topic.MUSIC,
  sach: Topic.BOOK,
};
export const mapNameTopicToSlug: Record<Topic, string> = {
  [Topic.SOCIETY]: "xa-hoi",
  [Topic.SPORT]: "the-thao",
  [Topic.ENTERTAINMENT]: "giai-tri",
  [Topic.EDUCATION]: "giao-duc",
  [Topic.SCIENCE]: "khoa-hoc",
  [Topic.TECHNOLOGY]: "cong-nghe",
  [Topic.ECONOMY]: "kinh-te",
  [Topic.POLITICS]: "chinh-tri",
  [Topic.WORLD]: "the-gioi",
  [Topic.LAW]: "phap-luat",
  [Topic.HEALTH]: "suc-khoe",
  [Topic.CULTURE]: "van-hoa",
  [Topic.LIFE]: "doi-song",
  [Topic.TRAVEL]: "du-lich",
  [Topic.FASHION]: "thoi-trang",
  [Topic.FOOD]: "am-thuc",
  [Topic.CAR]: "xe",
  [Topic.MOVIE]: "phim",
  [Topic.MUSIC]: "nhac",
  [Topic.BOOK]: "sach",
}
