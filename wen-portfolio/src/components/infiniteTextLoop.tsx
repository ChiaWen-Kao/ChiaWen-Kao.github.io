export default function InfiniteTextLoop({ text }: { text: string }) {
  return (
    <div className="infinite-text-loop whitespace-nowrap overflow-hidden">
      <div className="animate-scroll-text inline-block">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
}