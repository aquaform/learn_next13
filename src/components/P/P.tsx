import styles from './P.module.css';
import {PProps} from "@/components/P/P.props";
import cn from 'classnames';
export const P = ({size = 'm', children, className, ...props}: PProps): JSX.Element => {
    return (
        <>
          <p className={cn(className, styles[size], styles.p)} {...props}>{children}</p>
        </>
    );
};