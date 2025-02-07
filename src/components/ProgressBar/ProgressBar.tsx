import "./ProgressBar.scss";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  let progressWidth: number = progress;

  if (progress > 100) {
    progressWidth = 100;
  } else if (progress <= 0) {
    progressWidth = 0;
  }

  const progressWidthPercentage = progressWidth * 100;

  return (
    <div className="progressBar">
      <div
        className="progressBar__progress"
        style={{ width: `${progressWidthPercentage}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
