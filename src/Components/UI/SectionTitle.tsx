interface Props {
    title: string;
}


export default function SectionTitle({ title }: Props) {
    return (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {title}
        </h2>
    );
}