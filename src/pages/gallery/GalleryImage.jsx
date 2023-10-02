import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const GalleryImage = ({ images, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="gallery">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="grid grid-cols-4 gap-4 mx-10 pb-10 "
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {images.map((image, index) => (
              <Draggable
                key={image.id.toString()}
                draggableId={image.id.toString()}
                index={index} 
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="relative p-4 rounded-2xl mb-10 border shadow-2xl border-gray-800"
                  >
                    <img
                      src={image.image}
                      alt={`Imag ${image.id}`}
                      className="w-full  object-cover h-[300px]"
                    />
                    <div className="bg-gray-700 p-2 font-rale">
                      <h1 className="text-sm capitalize text-slate-200 font-bold">
                        TAGS
                      </h1>
                      <div className="flex flex-col gap-2 flex-wrap">
                        {image.tag.split(', ').map((tag, tagIndex) => (
                          <span className="text-sm text-slate-100" key={tagIndex}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default GalleryImage;
 