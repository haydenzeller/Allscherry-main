import { list } from '@vercel/blob'

export default async function VideoComponent() {
  const { blobs } = await list({
    prefix: "anth-flipthru-8sgckPYhSfPnyVW1cI9Pv3g1NpycXY.mov",
    limit: 1,
  })
  const { url } = blobs[0]
 
  return (
    <video controls preload="auto" aria-label="Video player" className='rounded-box' width={1920} height={1080}>
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
