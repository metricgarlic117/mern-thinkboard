import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import api from "../lib/axios.js";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import RateLimitedUI from "../components/RateLimitedUI.jsx";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success(`Note is successfully deleted`);
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error.response?.status !== 429) toast.error("Failed to delete note");
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() && !note.content.trim()) {
      toast.error("Please add a title and content");
      return;
    }

    setSaving(true);
    try {
      const { title, content } = note;
      console.log(title, content);
      await api.put(`/notes/${id}`, { title, content });
      toast.success(`Note is successfully updated`);
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error.response?.status !== 429) toast.error("Failed to save note");
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error(error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch the note");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);
  console.log(note);
  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin [animation-duration:2s] size-10" />
      </div>
    );
  }

  if (isRateLimited || !note) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <RateLimitedUI />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          <div className="card-body">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <br></br>
              <input
                type="text"
                placeholder="Note Title"
                className="input input-bordered w-full"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <br></br>
              <textarea
                type="text"
                placeholder="Write your note here..."
                className="textarea textarea-bordered h-32 w-full"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>

            <div className="flex justify-end">
              <button
                className="btn btn-primary disabled:{saving}"
                onClick={handleSave}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
