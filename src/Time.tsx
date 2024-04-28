type TimeProps = {
  time?: string;
};

const date: Date = new Date();
const currentTime: string = date.toTimeString();

const Time = ({ time = currentTime }: TimeProps) => (
  <>
    <label>Current time:</label>
    <span data-testid="current-time">{time}</span>
  </>
);

export default Time;
