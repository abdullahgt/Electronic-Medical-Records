import classes from './Card.module.css';
function Card(porps) {
    return <div className={classes.card}>{porps.children}</div>
}
export default Card;