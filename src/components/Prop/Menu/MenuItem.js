import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({data}) {
    return <Button className={cx("button-item")} to={data.to} iconleft={data.icon} tranparent>{data.title}</Button>;
}

export default MenuItem;