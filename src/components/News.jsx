import { Typography, Row, Col, Card, Avatar } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../data/cryptoNewsApi";

const { Text, Title } = Typography;
// const { Option } = Select;
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 8 : 24,
  });

  if (!cryptoNews?.value) return "Loading...";
  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="new-image-container">
                  <Title level={4} className="news-title">
                    {news.name}
                  </Title>
                  <img src={news?.image?.thumbnail?.contentUrl} alt="news" />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.subString(0, 100)}`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={news.provider[0]?.image?.thumbnail?.contentUrl}
                    />
                    <Text>{news.provider[0]?.name}</Text>
                  </div>

                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
