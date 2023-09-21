import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const GalleryImage = ({ images, onDragEnd }) => {
  console.log(images)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="gallery">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="grid grid-cols-4 gap-4 mx-10"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                }}
          >
            {images.map((image, index) => (
              <Draggable key={image.id.toString()} draggableId={image.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="relative p-4 rounded mb-20 "
                        // style={{
                        //   aspectRatio: "1/1",
                        // }}
                  >
                    <img
                      src={image.urls.regular}
                      alt={image.slug}
                      className="w-full h-full object-cover max-h-[300px] "
                    />
                    <div className="bg-gray-500 p-2">
                      <h1 className="text-sm capitalize text-slate-200">TAGS</h1>
                      {image.tags.map((tag)=>(
                        <p className="text-sm text-slate-100">{tag.title}</p>
                      ))}                 
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