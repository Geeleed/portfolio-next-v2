import Image, { ImageProps } from "next/image";

const MyImage = (props: ImageProps) => <Image {...props} unoptimized />;

export default MyImage;
