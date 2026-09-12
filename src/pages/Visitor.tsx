import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormState = {
  name: string;
  phone: string;
  unit: string;
  visitDate: string;
};

const Visitor = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    unit: "",
    visitDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const newVisitor = {
    id: Date.now(),
    name: form.name,
    phone: form.phone,
    unit: form.unit,
    visitDate: form.visitDate,
    status: "Pending",
  };

  const existingVisitors = JSON.parse(
    localStorage.getItem("visitors") || "[]"
  );

  const updatedVisitors = [
    ...existingVisitors,
    newVisitor,
  ];

  localStorage.setItem(
    "visitors",
    JSON.stringify(updatedVisitors)
  );

  console.log("Saved visitors:", updatedVisitors);

  navigate("/visitor-list");
};

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Add Visitor
            </h1>

            <p className="text-sm text-gray-500">
              Enter visitor details
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/visitor-list")}
            className="rounded-lg bg-gray-800 px-4 py-2 text-white"
          >
            Visitor List
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="label">
              Name
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              placeholder="Enter visitor name"
              className="input_field"
              required
            />
          </div>

          <div>
            <label className="label">
              Phone
            </label>

            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              placeholder="Enter phone number"
              className="input_field"
              required
            />
          </div>

          <div>
            <label className="label">
              Unit Number
            </label>

            <input
              type="text"
              value={form.unit}
              onChange={(e) =>
                setForm({
                  ...form,
                  unit: e.target.value,
                })
              }
              placeholder="Enter unit number"
              className="input_field"
              required
            />
          </div>

          <div>
            <label className="label">
              Visit Date
            </label>

            <input
              type="date"
              value={form.visitDate}
              onChange={(e) =>
                setForm({
                  ...form,
                  visitDate: e.target.value,
                })
              }
              className="input_field"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600">
              Visitor added successfully
            </p>
          )}

        </form>
      </div>
    </div>
  );
};

export default Visitor;