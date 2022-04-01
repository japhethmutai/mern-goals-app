import GoalItem from "./GoalItem";

function Goals({ goals }) {
  return (
    <section className="content">
      {goals.length > 0 ? (
        <div className="goals">
          {goals.map((goal) => (
            <GoalItem key={goal._id} goal={goal} />
          ))}
        </div>
      ) : (
        <h3>You have not set any goals</h3>
      )}
    </section>
  );
}

export default Goals;
