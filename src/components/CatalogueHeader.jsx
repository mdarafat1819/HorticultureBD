import './CatalogueHeader.css';

function CatalogueHeader({title, description}) {
    return (
        <div className="catalogue-header">
            <span className='catalogue-header__icon'></span>
            <span className='catalogue-header__title'>{title}</span>
            <h1 className='catalogue-header__description'>{description}</h1>
        </div>
    );
}
export default CatalogueHeader;