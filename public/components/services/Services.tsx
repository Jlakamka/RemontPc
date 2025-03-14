import "./services.css";
import Image from "next/image";
import image1 from "../../image/rempk1.webp";

export default function Services() {
  const content = [
    {
      heading: "Ремонт компьютера",
      description:
        "Если ваш компьютер перестал работать или работает неисправно, то наши специалисты по ремонту компьютеров помогут. Они проведут диагностику и выявят причину неисправности, затем проведут ремонт и настройку вашего компьютера.",
      image: image1,
      id: 1,
    },
    {
      heading: "Ремонт ноутбуков",
      description:
        "Если ваш компьютер перестал работать или работает неисправно, то наши специалисты по ремонту компьютеров помогут. Они проведут диагностику и выявят причину неисправности, затем проведут ремонт и настройку вашего компьютера.",
      image: image1,
      id: 2,
    },
    {
      heading: "Сборка компьютера",
      description:
        "В случае если если вы хотите приобрести компьютер или же у вас старый компьютер, то наши специалисты соберут готовый компьютер из качественных комплектующих",
      image: image1,
      id: 3,
    },
  ];
  return (
    <section className="container services">
      <h3 className="services__heading heading-petal">Услуги</h3>
      <div className="services__content">
        {content.map((el) =>
          el.id % 2 === 0 ? (
            <div key={el.id} className="services__section">
              <div className="services__block">
                <h2 className="services__block-heading">{el.heading}</h2>
                <p className="services__block-text">{el.description}</p>
              </div>
              <div className="services__block">
                <div className="services__block-img">
                  <Image src={el.image} alt="image" />
                </div>
              </div>
            </div>
          ) : (
            <div key={el.id} className="services__section">
              <div className="services__block">
                <div className="services__block-img">
                  <Image src={el.image} alt="image" />
                </div>
              </div>
              <div className="services__block">
                <h2 className="services__block-heading">{el.heading}</h2>
                <p className="services__block-text">{el.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
