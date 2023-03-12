export interface Props {
  handleChange: (flag: boolean) => void;
}

const HomeTnC = ({ handleChange }: Props) => {
  return (
    <div className="HomeTnC">
      <h3>TERMS & CONDITIONS</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
        officiis unde repellat quos illum quidem vero. Maxime maiores
        exercitationem, voluptates accusantium aperiam alias vitae tenetur ipsa?
        Dolore, quia! Soluta, deserunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
        officiis unde repellat quos illum quidem vero. Maxime maiores
        exercitationem, voluptates accusantium aperiam alias vitae tenetur ipsa?
        Dolore, quia! Soluta, deserunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
        officiis unde repellat quos illum quidem vero. Maxime maiores
        exercitationem, voluptates accusantium aperiam alias vitae tenetur ipsa?
        Dolore, quia! Soluta, deserunt.
      </p>
      <div>
        <button onClick={handleChange.bind(null, false)}>Cancel</button>
        <button onClick={handleChange.bind(null, true)}>Accept</button>
      </div>
    </div>
  );
};

export default HomeTnC;
