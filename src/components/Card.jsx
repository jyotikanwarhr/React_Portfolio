function Card({ project }) {
    return (
        <div className="card flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                    className="card-image"
                    src={project?.image}
                    alt="img-blur-shadow"
                    layout="fill"
                />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {project?.title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {project?.description}
                </p>
            </div>
            <div className="p-6 pt-0">
            {project?.github &&
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button
                        className="pointer rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Git Hub
                    </button>
                </a>}
                {project?.deploy &&
                    <button
                        className="pointer rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                            Deploy

                        </a>
                    </button>}
            </div>
        </div>
    )
}

export default Card;