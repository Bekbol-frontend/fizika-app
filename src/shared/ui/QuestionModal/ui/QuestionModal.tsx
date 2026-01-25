import { Modal, Card, Radio, Button, Typography } from "antd";
import { useState } from "react";
import type { IQuestion } from "../types";

const { Title } = Typography;

interface IProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  questions: IQuestion[];
}

function QuestionModal(props: IProps) {
  const { handleCancel, isModalOpen, questions } = props;

  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  const onChangeAnswer = (id: number, value: boolean) => {
    if (isFinished) return;

    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const correctCount = questions.filter(
    (q) => answers[q.id] === q.correctAnswer,
  ).length;

  return (
    <Modal
      title="Test savollari"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      centered
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      {questions.map((q, index) => (
        <Card key={q.id} style={{ marginBottom: 16 }}>
          <Title level={5}>
            {index + 1}. {q.question}
          </Title>

          <Radio.Group
            value={answers[q.id]}
            onChange={(e) => onChangeAnswer(q.id, e.target.value)}
            disabled={isFinished}
          >
            <Radio value={true}>Ha</Radio>
            <Radio value={false}>Yo‘q</Radio>
          </Radio.Group>
        </Card>
      ))}

      <Button
        type="primary"
        onClick={() => setIsFinished(true)}
        disabled={
          isFinished || Object.keys(answers).length !== questions.length
        }
      >
        Natijani ko‘rish
      </Button>

      {isFinished && (
        <Card style={{ marginTop: 24 }}>
          <Title level={4}>
            Natija: {correctCount} / {questions.length}
          </Title>
        </Card>
      )}
    </Modal>
  );
}

export default QuestionModal;
