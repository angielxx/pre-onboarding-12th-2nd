interface Props {
  error: Error;
}

export const ApiError = ({ error }: Props) => {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};
