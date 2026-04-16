import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const featureDetails = [
    {
        name: "Food",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Aliquam sit amet sollicitudin est. Suspendisse potenti. Donec porttitor tempor pulvinar. Sed congue elementum placerat. Maecenas nec rhoncus est.",
    },
    {
        name: "Merch",
        description: "Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, sit amet tincidunt enim sollicitudin ut. Vestibulum at elementum leo. Aliquam erat volutpat. Nullam magna orci, accumsan at arcu lobortis, volutpat cursus nisl. Suspendisse metus purus, gravida vehicula eros in, malesuada posuere magna.",
    },
    {
        name: "Attractions",
        description: "Nulla ac dolor nibh. Vestibulum feugiat convallis posuere. Pellentesque vestibulum eleifend turpis vel consequat. Cras tempor turpis in nunc finibus sollicitudin. Morbi malesuada sodales urna, quis pulvinar nunc interdum ultrices. Nullam id risus velit. Ut fringilla eleifend mollis. Phasellus in dui tellus. Nam euismod mattis quam porttitor ornare.",
    },
    {
        name: "Prizes",
        description: "Integer tempor enim lacus, sit amet dapibus diam elementum et. Pellentesque congue libero id enim dignissim consequat. Fusce et sagittis magna, in feugiat felis. Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, laoreet ornare purus nulla in ipsum. Praesent ac augue vitae turpis ullamcorper hendrerit eleifend in odio.",
    },
];

const Details = () => {
    return (
        <section className="mb-28">
            <div className="hidden md:grid gap-[115px_68px] grid-cols-2">
                {featureDetails.map((feature, key) => (
                    <div key={key}>
                        <h3 className="mb-6 font-[Athiti] text-2xl">{feature.name}</h3>
                        <p className="text-lg">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="md:hidden">
                {featureDetails.map((feature, key) => (
                    <Accordion key={key}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" />}>
                            <h3 className="font-[Athiti] text-2xl">
                                {feature.name}
                            </h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-lg">{feature.description}</p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </section>
    );
};

export default Details;