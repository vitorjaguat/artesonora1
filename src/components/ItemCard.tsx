type ItemCardProps = {
  itemObj: any; // Replace 'any' with the appropriate type for itemObj
};

export default function ItemCard({ itemObj }: ItemCardProps) {
  return <div>{itemObj.title}</div>;
}
