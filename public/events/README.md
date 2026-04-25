Event gallery media goes in these folders:

- `diwali/`
- `holi/`
- `ganesha-chaturthi/`
- `navratri-garba/`

Use simple names like:

- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`
- `video-1.mov`
- `video-1-poster.jpg`

After adding photos or videos, register them in `lib/signature-events.ts` under the matching event's `gallery` array:

```ts
gallery: [
  {
    type: "image",
    src: "/events/diwali/photo-1.jpg",
    alt: "AIS USC Diwali students performing on stage",
    caption: "Students performing during AIS USC Diwali.",
  },
  {
    type: "video",
    src: "/events/diwali/video-1.mov",
    poster: "/events/diwali/video-1-poster.jpg",
    alt: "AIS USC Diwali crowd dancing during the celebration",
    caption: "A quick look at the dance floor.",
  },
]
```

`.mov` files are supported by the gallery data model, but `.mp4` is usually safer for browser playback across Chrome, Safari, and mobile.
