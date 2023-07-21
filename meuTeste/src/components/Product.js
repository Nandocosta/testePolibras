import { Card, Col, Row } from 'antd';

import './product.css';

function Product ({produtos}){
    console.log(produtos)
    return (
        <>
             <Row gutter={16} justify='center'>
                {produtos.length > 0 ? (
                    produtos.map((item, id={id}) =>
                        <Col span={5}>
                            <Card className='cardProduto'
                                key={id}
                                hoverable
                                cover={
                                <img 
                                    style={{
                                        width: '50%',
                                        margin: 'auto',
                                        display: 'block'
                                    }} 
                                    src={item.image} 
                                />
                                }
                            >
                            
                            <h4>Produto: <span>{item.title}</span></h4>
                            <h6>Categoria: <span>{item.category}</span></h6> 
                            <h5>Preço: R${item.price}</h5>
                            <p><strong>Descrição:</strong> {item.description}</p>

                            </Card>
                        </Col>
                    )) :
                    ( <p>não existe produtos </p> )
                }
            </Row>
        </>
    )

}
export default Product