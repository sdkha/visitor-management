import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Visitor = {
  id: number;
  name: string;
  phone: string;
  unit: string;
  visitDate: string;
  status: string;
};

const VisitorList = () => {
  const navigate = useNavigate();

  const [visitors, setVisitors] = useState<Visitor[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("visitors");

    if (data) {
      setVisitors(JSON.parse(data));
    }
  }, []);

  const handleDelete = (id: number) => {
     const confirmDelete = window.confirm(
      "Are you sure you want to delete this visitor?"
    );

    if (!confirmDelete) {
      return;
    }
    const updatedData = visitors.filter(
      (visitor) => visitor.id !== id
    );

    setVisitors(updatedData);

    localStorage.setItem(
      "visitors",
      JSON.stringify(updatedData)
    );
  };

  const handleStatus = (id: number, status: string) => {
    const updatedData = visitors.map((visitor) =>
      visitor.id === id
        ? { ...visitor, status }
        : visitor
    );

    setVisitors(updatedData);

    localStorage.setItem(
      "visitors",
      JSON.stringify(updatedData)
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Visitor List
            </h1>

            <p className="text-sm text-slate-500">
              All visitors
            </p>
          </div>

          <button
            onClick={() => navigate("/visitor")}
            className="btn-primary"
          >
            + Add Visitor
          </button>

        </div>

        <div className="overflow-x-auto rounded-2xl bg-white shadow">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-sm">
                  Unit
                </th>
                <th className="px-6 py-4 text-left text-sm">
                  Visit Date
                </th>
                <th className="px-6 py-4 text-left text-sm">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm">
                  Action
                </th>
              </tr>

            </thead>

            <tbody>

              {visitors.length === 0 ? (

                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No visitors found
                  </td>
                </tr>

              ) : (

                visitors.map((visitor) => (

                  <tr
                    key={visitor.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="px-6 py-4 font-semibold">
                      {visitor.name}
                    </td>

                    <td className="px-6 py-4">
                      {visitor.phone}
                    </td>

                    <td className="px-6 py-4">
                      {visitor.unit}
                    </td>

                    <td className="px-6 py-4">
                      {visitor.visitDate}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                        {visitor.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">

                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            handleStatus(
                              visitor.id,
                              "Approved"
                            )
                          }
                          className="rounded bg-green-500 px-3 py-2 text-xs text-white"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            handleStatus(
                              visitor.id,
                              "Rejected"
                            )
                          }
                          className="rounded bg-orange-500 px-3 py-2 text-xs text-white"
                        >
                          Reject
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(visitor.id)
                          }
                          className="rounded bg-red-500 px-3 py-2 text-xs text-white"
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default VisitorList;