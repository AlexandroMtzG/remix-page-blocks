import CheckIcon from "../icons/CheckIcon";
import XIcon from "../icons/XIcon";

interface Props {
  items: { route: string; c: boolean; r: boolean; u: boolean; d: boolean }[];
}

export default function DocLifeCycle({ items }: Props) {
  return (
    <div className="not-prose flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="w-full px-2 py-1.5 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Route
                  </th>
                  <th scope="col" className="px-2 py-1.5 text-center text-sm font-semibold text-gray-900">
                    Create
                  </th>
                  <th scope="col" className="px-2 py-1.5 text-center text-sm font-semibold text-gray-900">
                    Read
                  </th>
                  <th scope="col" className="px-2 py-1.5 text-center text-sm font-semibold text-gray-900">
                    Update
                  </th>
                  <th scope="col" className="px-2 py-1.5 text-center text-sm font-semibold text-gray-900">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {items.map((item) => (
                  <tr key={item.route}>
                    <td className="whitespace-nowrap px-2 py-1.5 text-sm font-medium text-gray-900 sm:pl-6">{item.route}</td>
                    <td className="whitespace-nowrap px-2 py-1.5 text-center text-sm text-gray-500">
                      {item.c ? <CheckIcon className="mx-auto h-4 w-4 text-theme-500" /> : <XIcon className="mx-auto h-4 w-4 text-gray-300" />}
                    </td>
                    <td className="whitespace-nowrap px-2 py-1.5 text-center text-sm text-gray-500">
                      {item.r ? <CheckIcon className="mx-auto h-4 w-4 text-theme-500" /> : <XIcon className="mx-auto h-4 w-4 text-gray-300" />}
                    </td>
                    <td className="whitespace-nowrap px-2 py-1.5 text-center text-sm text-gray-500">
                      {item.u ? <CheckIcon className="mx-auto h-4 w-4 text-theme-500" /> : <XIcon className="mx-auto h-4 w-4 text-gray-300" />}
                    </td>
                    <td className="whitespace-nowrap px-2 py-1.5 text-center text-sm text-gray-500">
                      {item.d ? <CheckIcon className="mx-auto h-4 w-4 text-theme-500" /> : <XIcon className="mx-auto h-4 w-4 text-gray-300" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
