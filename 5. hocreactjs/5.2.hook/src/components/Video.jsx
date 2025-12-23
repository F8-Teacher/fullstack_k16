export default function Video({ ref }) {
  return (
    <div>
      <video
        // autoPlay
        // muted
        src="/my-video.mp4"
        width={"100%"}
        height={200}
        ref={ref}
      ></video>
    </div>
  );
}
