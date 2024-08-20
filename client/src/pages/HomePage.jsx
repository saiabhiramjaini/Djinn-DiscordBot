import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [members, setMembers] = useState([]);
  const [quizMembers, setQuizMembers] = useState([]);
  const [hackathonMembers, setHackathonMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/v1/owner/members"
        );
        setMembers(response.data.members || []); // Ensuring members is an array
      } catch (error) {
        if (error.response) {
          console.error("Error status:", error.response.status);
          console.error("Error data:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    };
    fetchMembers();
  }, []);

  useEffect(() => {
    const fetchQuizMembers = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/v1/owner/quiz-members"
        );
        setQuizMembers(response.data.quiz || []); // Ensuring quizMembers is an array
      } catch (error) {
        if (error.response) {
          console.error("Error status:", error.response.status);
          console.error("Error data:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    };
    fetchQuizMembers();
  }, []);

  useEffect(() => {
    const fetchHackathonMembers = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/v1/owner/hackathon-members"
        );
        setHackathonMembers(response.data.hackathon || []); // Ensuring hackathonMembers is an array
      } catch (error) {
        if (error.response) {
          console.error("Error status:", error.response.status);
          console.error("Error data:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    };
    fetchHackathonMembers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Members Information</h1>

      {/* Members Table */}
      <div className="mb-8">
        <h2 className="font-bold text-lg mb-2">Members</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">index</th>
              <th className="py-2 px-4 border-b text-left">Member Name</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{member}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quiz Members Table */}
      <div className="mb-8">
        <h2 className="font-bold text-lg mb-2">Quiz Members</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">index</th>
              <th className="py-2 px-4 border-b text-left">Quiz Member Name</th>
            </tr>
          </thead>
          <tbody>
            {quizMembers.map((quizMember, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{quizMember}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hackathon Members Table */}
      <div className="mb-8">
        <h2 className="font-bold text-lg mb-2">Hackathon Members</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">index</th>
              <th className="py-2 px-4 border-b text-left">Hackathon Member Name</th>
            </tr>
          </thead>
          <tbody>
            {hackathonMembers.map((member, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{member}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
