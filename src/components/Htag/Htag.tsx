import {HtagProps} from "@/components/Htag/Htag.props";

export const Index = ({tag, children}: HtagProps): JSX.Element => {
    return (
        <h1>{children}</h1>
    )
}