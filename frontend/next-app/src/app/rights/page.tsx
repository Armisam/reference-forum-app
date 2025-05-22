import { PERMISSIONS, roles } from "@/consts/dummy-rights";

export default function RightsPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">User Rights</h2>
      <div className="space-y-6">
        {roles.map((role) => (
          <div key={role.name}>
            <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">
              {role.name}
            </h3>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-800 shadow-sm">
              <ul className="list-disc pl-5 text-sm">
                {PERMISSIONS.map((p) => {
                  const isGranted = (role.permissions & p.bit) !== 0;
                  return (
                    <li
                      key={p.label}
                      className={`hover:underline cursor-pointer ${
                        isGranted ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {p.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
