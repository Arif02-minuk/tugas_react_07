import React from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Badge,
  Media,
  Breadcrumb,
  Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs lg="2">
          <Alert variant="primary">Website React Bootstrap</Alert>
        </Col>
        <Col ld={4}></Col>
        <Col md="auto">
          <Button variant="primary">
            Notification <Badge variant="light">9</Badge>
          </Button>
          <Button variant="primary">
            Message <Badge variant="light">19</Badge>
          </Button>
        </Col>
        <Col xs lg="2">
          <Media>
            <img
              width={20}
              height={20}
              className="align-self-center mr-3"
              src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
              alt="Icon Profile"
            />
            <Media.Body>
              <h5>Andreas</h5>
            </Media.Body>
          </Media>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 3, offset: 3 }}></Col>
        <Col md={{ span: 3, offset: 3 }}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row>
        <Col style={{ marginLeft: "250px", marginRight: "-300px" }}>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
            />
            <Card.Body>
              <Card.Title>
                Diego Godin Ukir Rekor Special Lawan Thailand
              </Card.Title>
              <Card.Text>
                Godin sekarang menjadi pemain Urugay dengan caps terbanyak
                setelah membantu negaranya melibas Thailand di final Piala
                Tiongkok. Diego Godin boleh berbangga setelah resmi menjadi.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ marginLeft: "-300px", marginRight: "-300px" }}>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
            />
            <Card.Body>
              <Card.Title>
                Neymar Bahas Kontrak Baru Di Paris Saint-German
              </Card.Title>
              <Card.Text>
                Ayah sang pemain bintang brasil berusaha meredam runir
                ketertarikan Madrid. Neymar sedang berdiskusi dengan
                Paris-Saint-Germain soal perpanjangan kontrak bersama kampiun
                Ligue 1 Prancis, demikian kata ayahnya.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ marginLeft: "-300px", marginRight: "-300px" }}>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
            />
            <Card.Body>
              <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
              <Card.Text>
                Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat
                Barkley sangat optimis. Ross Barkley merasa Inggris sudah berada
                di jalur yang benar untuk bisa menjadi tim terbaik didunia
                dengan banyaknya talenta yang muncul sekarang ini.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ marginLeft: "-300px", marginRight: "-300px" }}>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
            />
            <Card.Body>
              <Card.Title>
                Sang Rizki Fauzi Tegaskan Mental Pemain Indonesua U-23 Tetap
                Bagus
              </Card.Title>
              <Card.Text>
                Gelandang tim nasional (timnas) indonesia u-23, Sani Riski
                Fauxi, menegaskan kesiapannya untuk bermain pada laga melawan
                Brunei Darussalam U-23. Kedua tim akan bentrol pada laga
                pamungkas group K
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
