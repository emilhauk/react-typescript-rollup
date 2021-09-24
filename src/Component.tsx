import { FC } from "react";

type Props = {
    test: string,
}
const Component: FC<Props> = ({test}) => {
    return <p>Much: {test}</p>;
}
export default Component;
