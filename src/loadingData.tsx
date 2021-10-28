
interface propsInterface {
    imageSrc: string
}

const LoadingImage = (props: propsInterface) => {

    return (

        <div>
            <p className='loadingMessage'>Please wait we are looking your ToDos list</p>
            <img src={props.imageSrc} alt="img" /></div>)
};

export default LoadingImage;
