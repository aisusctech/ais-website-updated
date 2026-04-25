Event gallery images go in these folders:

- `diwali/`
- `holi/`
- `ganesha-chaturthi/`
- `navratri-garba/`

After adding images, register them in `lib/signature-events.ts` under the matching event's `gallery` array:

```ts
gallery: [
  {
    src: "/events/diwali/photo-1.jpg",
    alt: "AIS USC Diwali students performing on stage",
    caption: "Students performing during AIS USC Diwali.",
  },
]
```

The event page gallery stays hidden until at least one image is added.
