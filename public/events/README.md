Event gallery media goes in these folders:

- `diwali/`
- `holi/`
- `ganesha-chaturthi/`
- `navratri-garba/`

Use simple names like:

- `photo-1.webp`
- `photo-2.webp`
- `photo-3.webp`
- `video-1.mp4`
- `video-1-poster.webp`

After adding photos or videos, register them in `lib/signature-events.ts` under the matching event's `gallery` array:

```ts
gallery: [
  {
    type: "image",
    src: "/events/diwali/photo-1.webp",
    alt: "AIS USC Diwali students performing on stage",
    caption: "Students performing during AIS USC Diwali.",
  },
  {
    type: "video",
    src: "/events/diwali/video-1.mp4",
    poster: "/events/diwali/video-1-poster.webp",
    alt: "AIS USC Diwali crowd dancing during the celebration",
    caption: "A quick look at the dance floor.",
  },
]
```

Use WebP for gallery photos and compressed MP4 for gallery videos. Keep original JPG/MOV files outside `public/` so production deploys only serve optimized media.
