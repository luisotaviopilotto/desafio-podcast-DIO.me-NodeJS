export enum ContentType {
  // Text
  TEXT_PLAIN = "text/plain; charset=utf-8",
  TEXT_HTML = "text/html; charset=utf-8",
  TEXT_CSS = "text/css; charset=utf-8",
  TEXT_JAVASCRIPT = "text/javascript; charset=utf-8",
  TEXT_XML = "text/xml; charset=utf-8",
  TEXT_CSV = "text/csv; charset=utf-8",
  TEXT_EVENT_STREAM = "text/event-stream",

  // Application
  APPLICATION_JSON = "application/json; charset=utf-8",
  APPLICATION_XML = "application/xml; charset=utf-8",
  APPLICATION_PDF = "application/pdf",
  APPLICATION_ZIP = "application/zip",
  APPLICATION_GZIP = "application/gzip",
  APPLICATION_OCTET_STREAM = "application/octet-stream",
  APPLICATION_FORM_URLENCODED = "application/x-www-form-urlencoded",
  APPLICATION_JAVASCRIPT = "application/javascript",
  APPLICATION_GRAPHQL = "application/graphql",
  APPLICATION_WASM = "application/wasm",
  APPLICATION_RTF = "application/rtf",

  // Multipart
  MULTIPART_FORM_DATA = "multipart/form-data",
  MULTIPART_MIXED = "multipart/mixed",
  MULTIPART_ALTERNATIVE = "multipart/alternative",
  MULTIPART_RELATED = "multipart/related",

  // Images
  IMAGE_PNG = "image/png",
  IMAGE_JPEG = "image/jpeg",
  IMAGE_GIF = "image/gif",
  IMAGE_WEBP = "image/webp",
  IMAGE_SVG = "image/svg+xml",
  IMAGE_BMP = "image/bmp",
  IMAGE_ICO = "image/x-icon",
  IMAGE_TIFF = "image/tiff",
  IMAGE_AVIF = "image/avif",

  // Audio
  AUDIO_MPEG = "audio/mpeg",
  AUDIO_OGG = "audio/ogg",
  AUDIO_WAV = "audio/wav",
  AUDIO_WEBM = "audio/webm",
  AUDIO_AAC = "audio/aac",
  AUDIO_FLAC = "audio/flac",

  // Video
  VIDEO_MP4 = "video/mp4",
  VIDEO_MPEG = "video/mpeg",
  VIDEO_OGG = "video/ogg",
  VIDEO_WEBM = "video/webm",
  VIDEO_QUICKTIME = "video/quicktime",
  VIDEO_X_MSVIDEO = "video/x-msvideo",

  // Fonts
  FONT_TTF = "font/ttf",
  FONT_OTF = "font/otf",
  FONT_WOFF = "font/woff",
  FONT_WOFF2 = "font/woff2",

  // Archives
  APPLICATION_TAR = "application/x-tar",
  APPLICATION_7Z = "application/x-7z-compressed",
  APPLICATION_RAR = "application/vnd.rar",

  // Microsoft / Office
  APPLICATION_MSWORD = "application/msword",
  APPLICATION_EXCEL = "application/vnd.ms-excel",
  APPLICATION_POWERPOINT = "application/vnd.ms-powerpoint",
  APPLICATION_OPENXML_WORD = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  APPLICATION_OPENXML_EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  APPLICATION_OPENXML_POWERPOINT = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
}
