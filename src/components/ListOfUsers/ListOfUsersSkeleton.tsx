import Skeleton from "../Ui/Skeleton/Skeleton";

const ListOfUsersSkeleton = () => {
  return (
    <ul>
      {Array(5)
        .fill("")
        .map(() => {
          return (
            <li style={styles}>
              <Skeleton variant="circular" width={58} height={58} />
              <Skeleton variant="rectangular" width={130} height={24} />
            </li>
          );
        })}
    </ul>
  );
};

export default ListOfUsersSkeleton;

const styles = {
  height: "87px",
  border: "1px solid rgb(221, 221, 221)",
  display: "flex",
  alignItems: "center",
  columnGap: "15px",
  padding: "0.8rem 1.2rem",
  borderRadius: "10px",
  marginBottom: "10px",
};
