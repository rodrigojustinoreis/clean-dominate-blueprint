interface LastUpdatedProps {
  date?: string;
  dateTime?: string;
}

const LastUpdated = ({ date = "May 2026", dateTime = "2026-05-20" }: LastUpdatedProps) => (
  <p className="text-sm text-muted-foreground mt-2">
    <time dateTime={dateTime}>Updated {date}</time>
  </p>
);

export default LastUpdated;
