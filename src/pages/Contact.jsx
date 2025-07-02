import { FaUserCircle } from 'react-icons/fa';

const developers = [
  { name: 'Roshni', role: 'Lead Developer' },
  { name: 'Aniket', role: 'Back-end Developer' },
  { name: 'Deepali', role: 'UI/UX Designer' },
  { name: 'Addwaita', role: 'Front-end Developer' },
];

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10">
      <h1 className="mb-6 text-4xl font-bold text-indigo-700">Meet the Developers</h1>
      <div className="w-full max-w-md space-y-4">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="flex items-center p-4 transition bg-white shadow-md rounded-xl hover:shadow-xl"
          >
            <FaUserCircle className="mr-4 text-4xl text-indigo-400" />
            <div>
              <p className="text-xl font-semibold">{dev.name}</p>
              <p className="text-sm text-gray-600">{dev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
